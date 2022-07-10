import { useState,useEffect } from "react"
import {  getDoc ,doc , collection, query, where } from "firebase/firestore";
import { db } from '../firebase/config'
import { useParams } from "react-router-dom";
 


export const useSize = () => {
    
    const [ size, setSize ] = useState(undefined)
    const [ stock, setStock ] = useState()
    const { itemId } = useParams()
    
    const s = () => setSize('S')
    const m = () => setSize('M')
    const l = () => setSize('L')
    
    const docRef = doc(db , 'productos', itemId)
    { console.log(stock) } 

    useEffect( () => {
        if (size === 'S') {
            getDoc(docRef)
            .then((doc) => {
                const newItem = { id:doc.id, ...doc.data()}
                setStock(newItem.stock.s)
                
            })
        } else if (size === 'M') {
            getDoc(docRef)
            .then((doc) => {
                const newItem = { id:doc.id, ...doc.data()}
                setStock(newItem.stock.m)
                
            })
        } else if (size === 'L') {
            getDoc(docRef)
            .then((doc) => {
                const newItem = { id:doc.id, ...doc.data()}
                setStock(newItem.stock.l)
                
            },[size])
        }

    },[size])
    // { console.log(stock) } 
    // { console.log(size) } 

   
    return {
        s,m,l,
        size,
        stock 
    }
}

// 1°stock |  2°size  
// ! Falta coordinar el select con el pedido  de datos para asi
// ! coordinar el pedido con el max y el counter, finalmente checkout