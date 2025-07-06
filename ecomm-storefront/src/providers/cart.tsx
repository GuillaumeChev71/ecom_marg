"use client"

import {
    createContext,
} from "react"
import { HttpTypes } from "@medusajs/types"

type CartContextType = {
    cart?: HttpTypes.StoreCart
    addToCart: (variantId: string, quantity: number) => Promise<
        HttpTypes.StoreCart
    >
    updateCart: (data: {
        updateData?: HttpTypes.StoreUpdateCart,
        shippingMethodData?: HttpTypes.StoreAddCartShippingMethods
    }) => Promise<HttpTypes.StoreCart | undefined>
    refreshCart: () => Promise<HttpTypes.StoreCart | undefined>
    updateItemQuantity: (itemId: string, quantity: number) => Promise<
        HttpTypes.StoreCart
    >
    unsetCart: () => void
}

const CartContext = createContext<CartContextType | null>(null)

// TODO add provider component