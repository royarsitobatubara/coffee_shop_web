import React, { useEffect, useState } from 'react'
import ProductItem from './ProductItem'
import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa"
import * as productService from "../api/productService.js"

function Menu() {
  const [products, setProducts] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([])
  const [categorySelect, setCategorySelect] = useState("All")

  const categoryList = ['All', 'Espresso Based', 'Manual Brew', 'Cold Drinks', 'Non-coffee', 'Signature Drinks', 'Others']

  const fetchAllProduct = async () => {
    try {
      const res = await productService.fetchAllProducts()
      const data = res.data.data
      setProducts(data)
      setFilteredProducts(data)
    } catch (error) {
      console.log(`Gagal ambil data product`)
    }
  }

    const filterCategoryProduct = (category) => {
        setCategorySelect(category)
        if (category === "All") {
            setFilteredProducts(products)
        } else {
            const filtered = products.filter(itm => 
                itm.category.toLowerCase() === category.toLowerCase()
            )
            setFilteredProducts(filtered)
        }
    }



  useEffect(() => {
    fetchAllProduct()
  }, [])

  return (
    <div id='menu' className='pt-20 px-30 pb-10 text-center flex flex-col gap-4 min-h-dvh'>
      <h1 className='text-3xl text-[var(--primary)] font-bold'>Our Special Coffee</h1>
      <h3 className='text-sm text-[var(--primary)] font-semibold'>Categories</h3>

      {/* Tombol Filter */}
      <div className='flex items-center justify-center gap-x-4 w-full font-semibold text-base *:cursor-pointer *:select-none'>
        {categoryList.map((itm, idx) => (
          <button
            key={idx}
            type='button'
            onClick={() => filterCategoryProduct(itm)}
            className={`px-4 py-1 active:scale-95 rounded-md shadow-md transition-all duration-200 ${
              categorySelect === itm ? 'bg-[var(--primary)] text-white' : 'bg-[var(--white2)] hover:bg-[var(--primary)] hover:text-white'
            }`}
          >
            {itm}
          </button>
        ))}
      </div>

      {/* Carousel Menu */}
      <div className='flex items-center justify-center gap-2 w-full'>
        {
          filteredProducts.length > 0
            ? (
              <>
                <div className='grid grid-cols-5 grid-rows-2 gap-5'>
                  {filteredProducts.map((itm, idx) => (
                    <ProductItem
                      key={idx}
                      id={itm.idproduct}
                      name={itm.name}
                      price={itm.price}
                      image={itm.image}
                      description={itm.description}
                    />
                  ))}
                </div>
              </>
            )
            : <p className='text-center'>Tidak Ada Produk</p>
        }
      </div>
    </div>
  )
}

export default Menu
