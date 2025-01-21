

import { constants } from 'smooth-dnd'
import { defineComponent, h } from 'vue'

import { getTagProps, validateTagProp } from './utils'

/**
 * defineComponent 的 api
 */
export const SmoothDndDraggable = defineComponent({
    name: 'SmoothDndDraggable',
    props: {
        tag: {
            type: validateTagProp,
            default: 'div'
        }
    },
    render() {
        const tagProps = getTagProps(this, constants.wrapperClass)
        return h(tagProps.value, Object.assign({}, tagProps.props), this.$slots.default?.())
    }
})
