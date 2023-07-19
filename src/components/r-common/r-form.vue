<template>
    <div class="r-form">
        <el-form
            ref="$form"
            v-bind="inheritProps"
            :model="props.modelValue"
        >
            <el-form-item
                v-for="item in formConfig"
                :key="item.key"
                :prop="item.key"
                :label="item.label"
                :rules="item.rules"
            >
                <component
                    v-bind="formItemCompProps(item)"
                    :is="item.render ?? importFormItemType(item.type)"
                >
                    <template
                        v-for="[name, slot] in Object.entries(item.slots ?? {})"
                        :key="name"
                        #[name]
                    >
                        <component :is="slot" />
                    </template>
                </component>
            </el-form-item>
        </el-form>
    </div>
</template>

<script lang="jsx" setup>
import { get, set } from 'lodash-es'
import importFormItemType from './r-form-item-types/index.jsx'
import getPresetConfig from './r-form-item-presets/index.js'

const props = defineProps({
    modelValue: {
        type: Object,
        default: () => ({})
    },
    config: {
        type: Array,
        default: () => []
    },
    inheritProps: {
        type: Object,
        default: () => ({})
    }
})

// 配置信息二次处理
const formConfig = computedAsync(async () => {
    for (const cfg of props.config) {
        if (cfg.preset) {
            const res = await getPresetConfig(cfg)
            if (res instanceof Error) console.error(res)
        }

        // 必填项默认提示
        cfg.rules?.forEach(rule => {
            if (rule.required) {
                rule.message ??= `${cfg.label}不能为空`
            }
        })
    }

    return props.config
}, [])

// 异步组件属性
function formItemCompProps (item) {
    return {
        modelValue: get(props.modelValue, item.key),
        'onUpdate:modelValue': val => {
            set(props.modelValue, item.key, val)
        },
        ...item.props
    }
}

const $form = ref(null)

defineExpose({
    validate: (...args) => $form.value.validate(...args),
    validateField: (...args) => $form.value.validateField(...args),
    resetFields: (...args) => $form.value.resetFields(...args),
    scrollToField: (...args) => $form.value.scrollToField(...args),
    clearValidate: (...args) => $form.value.clearValidate(...args)
})

</script>

<style lang="scss" scoped>
:deep {
    .el-form-item__label {
        &::after {
            content: "：";
        }
    }
}
</style>
