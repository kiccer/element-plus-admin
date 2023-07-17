const components = {
    AutoComplete: defineAsyncComponent(() => import('element-plus/lib/components/autocomplete/index.js')),
    Cascader: defineAsyncComponent(() => import('element-plus/lib/components/cascader/index.js')),
    Checkbox: defineAsyncComponent(() => import('element-plus/lib/components/checkbox/index.js')),
    ColorPicker: defineAsyncComponent(() => import('element-plus/lib/components/color-picker/index.js')),
    DatePicker: defineAsyncComponent(() => import('element-plus/lib/components/date-picker/index.js')),
    DateTimePicker: defineAsyncComponent(() => import('element-plus/lib/components/date-picker/index.js')),
    Input: defineAsyncComponent(() => import('element-plus/lib/components/input/index.js')),
    InputNumber: defineAsyncComponent(() => import('element-plus/lib/components/input-number/index.js')),
    Radio: defineAsyncComponent(() => import('element-plus/lib/components/radio/index.js')),
    Rate: defineAsyncComponent(() => import('element-plus/lib/components/rate/index.js')),
    Select: defineAsyncComponent(() => import('element-plus/lib/components/select/index.js')),
    Slider: defineAsyncComponent(() => import('element-plus/lib/components/slider/index.js')),
    Switch: defineAsyncComponent(() => import('element-plus/lib/components/switch/index.js')),
    TimePicker: defineAsyncComponent(() => import('element-plus/lib/components/time-picker/index.js')),
    TimeSelect: defineAsyncComponent(() => import('element-plus/lib/components/time-picker/index.js')),
    Transfer: defineAsyncComponent(() => import('element-plus/lib/components/transfer/index.js')),
    Upload: defineAsyncComponent(() => import('element-plus/lib/components/upload/index.js'))
}

const styles = {
    AutoComplete: () => import('element-plus/lib/components/autocomplete/style/index.js'),
    Cascader: () => import('element-plus/lib/components/cascader/style/index.js'),
    Checkbox: () => import('element-plus/lib/components/checkbox/style/index.js'),
    ColorPicker: () => import('element-plus/lib/components/color-picker/style/index.js'),
    DatePicker: () => import('element-plus/lib/components/date-picker/style/index.js'),
    DateTimePicker: () => import('element-plus/lib/components/date-picker/style/index.js'),
    Input: () => import('element-plus/lib/components/input/style/index.js'),
    InputNumber: () => import('element-plus/lib/components/input-number/style/index.js'),
    Radio: () => import('element-plus/lib/components/radio/style/index.js'),
    Rate: () => import('element-plus/lib/components/rate/style/index.js'),
    Select: () => import('element-plus/lib/components/select/style/index.js'),
    Slider: () => import('element-plus/lib/components/slider/style/index.js'),
    Switch: () => import('element-plus/lib/components/switch/style/index.js'),
    TimePicker: () => import('element-plus/lib/components/time-picker/style/index.js'),
    TimeSelect: () => import('element-plus/lib/components/time-picker/style/index.js'),
    Transfer: () => import('element-plus/lib/components/transfer/style/index.js'),
    Upload: () => import('element-plus/lib/components/upload/style/index.js')
}

export default function importFormItemType (type) {
    // 加载样式 (懒加载)
    styles[type]?.()

    // 返回组件
    return components[type] ?? {
        render () {
            return <span>未知类型({ type })</span>
        }
    }
}
