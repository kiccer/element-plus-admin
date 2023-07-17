<template>
    <div class="r-form">
        <el-form
            :model="props.modelValue"
        >
            <el-form-item
                v-for="item in props.config"
                :key="item.key"
                :prop="item.key"
                :label="item.label"
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

const props = defineProps({
    modelValue: {
        type: Object,
        default: () => ({})
    },
    config: {
        type: Array,
        default: () => []
    }
})

function formItemCompProps (item) {
    return {
        modelValue: get(props.modelValue, item.key),
        'onUpdate:modelValue': val => {
            console.log(val)
            set(props.modelValue, item.key, val)
        },
        ...item.props
    }
}

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
