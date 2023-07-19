<template>
    <div class="page-container">
        <r-form
            v-model="formData"
            :config="formConfig"
        />

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
            { require: true }
        ]
    },
    {
        label: '生日',
        key: 'birthday',
        type: 'DatePicker',
        rules: [
            { require: true }
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
            { require: true }
        ]
    },
    {
        label: '测试render',
        render: () => <div>测试render</div>
    }
])

</script>

<style lang="scss" scoped>
// css
</style>
