/*
 *   Copyright (c) 2024 妙码学院 @Heyi
 *   All rights reserved.
 *   让进取的人更具职业价值
 */
import { type Ref, ref } from 'vue'

type UseDisclosureReturn = [
    Ref<boolean>,
    {
        open: () => void
        close: () => void
        toggle: () => void
    }
]

export const useDisclosure = (initial?: boolean): UseDisclosureReturn => {
    const flag = ref(initial ?? false)

    const open = () => {
        flag.value = true
    }

    const close = () => {
        flag.value = false
    }

    const toggle = () => {
        flag.value = !flag.value
    }

    return [
        flag,
        {
            open,
            close,
            toggle
        }
    ]
}
