<template>
    <div class="page-container">
        <r-form
            ref="$form"
            v-model="formData"
            :config="formConfig"
        />

        <el-button
            type="primary"
            @click="submit"
        >
            提交
        </el-button>

        <pre>formData: {{ formData }}</pre>
    </div>
</template>

<script lang="jsx" setup>
const formData = reactive({})
const formConfig = computed(() => [
    {
        label: '姓名',
        key: 'name',
        type: 'Input',
        rules: [
            { required: true }
        ]
    },
    {
        label: '生日',
        key: 'birthday',
        type: 'DatePicker',
        rules: [
            { required: true }
        ]
    },
    {
        label: '班级',
        key: 'class',
        type: 'Input',
        slots: {
            append: () => '班'
        }
    },
    {
        label: '班费',
        key: 'classFee',
        type: 'Input',
        preset: 'amount',
        rules: [
            { required: true }
        ]
    },
    {
        label: '测试render',
        render: () => <div>测试render</div>
    }
])

const $form = ref(null)

async function submit () {
    const isValid = await $form.value.validate().catch(err => {
        console.error(err)
        return false
    })

    if (isValid) {
        console.log('submit', formData)
    }
}

</script>

<style lang="scss" scoped>
// css
</style>
