import numeral from 'numeral'

export default async function (cfg) {
    cfg.slots.append ??= () => '元'
    cfg.props.parser ??= str => ~~(numeral(str).value() * 100)
    cfg.props.formatter ??= num => numeral(num / 100).format('0,0.00')
}
