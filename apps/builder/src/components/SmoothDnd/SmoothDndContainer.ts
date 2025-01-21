

import { constants, type SmoothDnD, smoothDnD } from 'smooth-dnd'
import { defineComponent, h } from 'vue'

import { getTagProps, validateTagProp } from './utils'

// var container = SmoothDnD(containerElement, options);
export const SmoothDndContainer = defineComponent({
    name: 'SmoothDndContainer',
    setup() {
        return {
            container: null as SmoothDnD | null
        }
    },
    mounted() {
        const options: any = Object.assign({}, this.$props)
        const containerElement = this.$refs.container as HTMLElement
        this.container = smoothDnD(containerElement, options)
    },
    unmounted() {
        if (this.container) {
            try {
                this.container.dispose()
            } catch {
                // console.error(e)
            }
        }
    },
    emits: [
        'drop',
        'drop-ready',
        'drop-end',
        'drag-start',
        'drag-end',
        'drag-enter',
        'drag-leave',
        'drop-move'
    ],
    props: {
        orientation: { type: String, default: 'vertical' },
        removeOnDropOut: { type: Boolean, default: false },
        autoScrollEnabled: { type: Boolean, default: true },
        animationDuration: { type: Number, default: 250 },
        behaviour: String,
        groupName: String,
        dragHandleSelector: String,
        nonDragAreaSelector: String,
        lockAxis: String,
        dragClass: String,
        dropClass: String,
        dragBeginDelay: Number,
        getChildPayload: Function,
        shouldAnimateDrop: Function,
        shouldAcceptDrop: Function,
        getGhostParent: Function,
        dropPlaceholder: [Object, Boolean],
        tag: {
            validator: validateTagProp,
            default: 'div'
        }
    },
    render() {
        const tagProps = getTagProps(this, constants.wrapperClass)
        return h(
            tagProps.value,
            Object.assign({}, { ref: 'container' }, tagProps.props),
            this.$slots.default?.()
        )
    }
})
