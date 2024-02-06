import React, { useState } from 'react'
import productImage1 from '../assets/Products/Lenovo IdeaPad Slim 3 12th Gen Intel Core i3 15.6.jpg'
import productImage2 from '../assets/Products/TECNO MEGABOOK T1, Intel Core 11th Gen i5 Processor.jpg'
import productImage3 from '../assets/Products/Dell 14 Laptop, 12th Gen Intel Core i3-1215U Processor.jpg'
import productImage4 from '../assets/Products/Dell Inspiron 3520 Laptop, Intel Core i3-1215U Processor.jpg'
import productImage5 from '../assets/Products/Dell Vostro 3510 Laptop.jpg'
import productImage6 from '../assets/Products/Chuwi HeroBook Pro 14.1.jpg'
import productImage7 from '../assets/Products/HP Laptop 15s.jpg'
import productImage8 from '../assets/Products/ASUS Vivobook 16X (2022).jpg'
import productImage9 from '../assets/Products/Dell Inspiron 3520 Laptop.jpg'
import productImage10 from '../assets/Products/HP Pavilion 14.jpg'
import { useCart } from '../context/cartContext'
const Products = () => {
    const [cart, setCart] = useCart();
    const products = {
        "id1":{
            "name":"Lenovo IdeaPad Slim 3 12th Gen Intel Core i3 15.6",
            "src":productImage1,
            "description":"FHD 250 Nits Thin and Light Laptop (8GB/256GB SSD/Windows 11/Office 2021/Alexa Built-in/3 Month Game Pass/Grey/1.62Kg), 82RK00XDIN",
            "price":"33990",
        },
        "id2":{
            "name":"TECNO MEGABOOK T1, Intel Core 11th Gen i5 Processor",
            "src":productImage2,
            "description":"(16GB RAM/512GB SSD Storage),15.6-Inch (39.62 CM), Eye Comfort disply, (14.8mm Ultra Slim/70 Wh Large Battery/Windows 11/ Moonshine Silver/1.56 Kg)",
            "price":"29990",
        },
        "id3":{
            "name":"Dell 14 Laptop, 12th Gen Intel Core i3-1215U Processor",
            "src":productImage3,
            "description":"8GB/512GB SSD/Intel UHD Graphics/14.0''(35.56cm) FHD/Windows 11 + MSO'21/15 Month McAfee/Spill-Resistant Keyboard/Grey/Thin & Light 1.48kg",
            "price":"37990",
        },
        "id4":{
            "name":"Dell Inspiron 3520 Laptop, Intel Core i3-1215U Processor",
            "src":productImage4,
            "description":"8GB, 512GB, 15.6'' (39.62cm) FHD AG 120Hz 250 nits, Win 11 + MSO'21, 15 Month McAfee Antivirus, Black, Thin & Light- 1.65kg",
            "price":"37779",
        },
        "id5":{
            "name":"Dell Vostro 3510 Laptop",
            "src":productImage5,
            "description":"Intel i5-1135G7/8GB/1TB+256GB SSD/15.6'(39.62cm) FHD,TÃœV Rheinland Certified ComfortviewReduce Harmful Blue Light/Backlit KB + FPR/Win 11+MSO'21/15 Month McAfee/Black/1.69kg",
            "price":"46990",
        },
        "id6":{
            "name":"Chuwi HeroBook Pro 14.1",
            "src":productImage6,
            "description":'8GB RAM 256GB SSD, Windows 11 Laptop, 1TB SSD Expand, Intel Celeron N4020(up to 2.8GHz), FHD IPS Display, Ultra Slim, Mini-HDMI, 5G WiFi, USB3.0, Webcam,TF Card',
            "price":"17990",
        },
        "id7":{
            "name":"HP Laptop 15s",
            "src":productImage7,
            "description":"12th Gen Intel Core i5-1235U, 15.6-inch (39.6 cm), FHD, 16GB DDR4, 512GB SSD, Intel UHD Graphics, Backlit KB, Thin & Light, Dual Speakers (Win 11, MSO 2021, Silver, 1.6 kg), fr5011TU",
            "price":"55999",
        },
        "id8":{
            "name":"ASUS Vivobook 16X (2022)",
            "src":productImage8,
            "description":"16.0-inch (40.64 cms) FHD+ 16:10, AMD Ryzen 5 5600H, Thin and Laptop (8GB/512GB SSD/Integrated Graphics/Windows 11/Office 2021/Silver/1.80 kg), M1603QA-MB501WS",
            "price":"46990",
        },
        "id9":{
            "name":"Dell Inspiron 3520 Laptop",
            "src":productImage9,
            "description":'12th Gen Intel Core i3-1215 Processor, 8GB, 512GB SSD, 15.6" (39.62Cms FHD, Win 11 + MSO"21, Silver, 15 Month McAfee Antivirus, Thin & Light-1.65kg',
            "price":"38650",
        },
        "id10":{
            "name":"HP Pavilion 14",
            "src":productImage10,
            "description":"12th Gen Intel Core i5-1235U, 14-inch (35.6 cm), FHD, 16GB DDR4, 512GB SSD, Intel Iris Xe graphics, FPR, Backlit KB, Audio by B&O (Win 11, MSO 2021, Silver, 1.41 kg), dv2014TU",
            "price":"62990",
        }
    }

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;

    const handleClick = (event) => {
        setCurrentPage(Number(event.target.id));
    }

    const renderProducts = () => {
        const indexOfLastProduct = currentPage * itemsPerPage;
        const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
        const currentProducts = Object.keys(products).slice(indexOfFirstProduct, indexOfLastProduct);

        return currentProducts.map((id) => {
            const p = products[id];
            return (
                <div
                    className={`card m-2 bg-light`}
                    style={{ width: "17rem" }}
                    key={id}
                >
                    <img
                        src={p.src}
                        className="card-img-top"
                        alt={p.name}
                    />
                    <div
                        className={`card-body text-dark`}
                        style={{ display:"flex" , flexDirection:"column",justifyContent:"space-between"}}
                    >
                        <h5 className="card-title">{p.name}</h5>
                        <p className="card-text">${p.price}</p>
                        <button
                            className="btn btn-secondary  "
                            style={{width:"50%"}}
                            onClick={() => {
                                setCart([...cart, p]);
                                localStorage.setItem(
                                  "cart",
                                  JSON.stringify([...cart, p])
                                );}}
                        >
                            Add to Cart
                        </button>
                    </div>
                </div>
            )
        });
    }

    const renderPageNumbers = () => {
        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(Object.keys(products).length / itemsPerPage); i++) {
            pageNumbers.push(i);
        }

        return pageNumbers.map(number => {
            return (
                <button
                    key={number}
                    id={number}
                    onClick={handleClick}
                >
                    {number}
                </button>
            );
        });
    }

    return (
        <>
        <div className="d-flex flex-wrap text-darks">
            {renderProducts()}
            
        </div>
        <div id="page-numbers" className='d-flex justify-content-evenly'>
                {renderPageNumbers()}
            </div>
        </>
    )
}

export default Products
