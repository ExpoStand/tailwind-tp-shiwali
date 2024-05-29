'use client';

import { useState, useEffect } from 'react';
import { FaSeedling } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { FaBuilding } from "react-icons/fa";

const Index = () => {
    const [productName, setProductName] = useState("");
    const [email, setEmail] = useState("");
    const [query, setQuery] = useState("");
    const [quantity, setQuantity] = useState("");
    const [captchaNum1, setCaptchaNum1] = useState(0);
    const [captchaNum2, setCaptchaNum2] = useState(0);
    const [company, setCompany] = useState("");
    const [isSumValid, setIsSumValid] = useState(true);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [userAnswer, setUserAnswer] = useState("");
    const [isSending, setIsSending] = useState(false);
    const [shipmentType, setShipmentType] = useState("");
    const [quantityType, setQuantityType] = useState("");

    const ShipmentTypeOptions = [
        { value: "20DV", label: "20DV" },
        { value: "40HQ", label: "40HQ" },
        { value: "40RF", label: "40RF" },
        { value: "20Break Bulk", label: "20Break Bulk" },
        { value: "Bulk", label: "Bulk" },

    ];



    useEffect(() => {
        generateRandomNumbers();
    }, []);

    const generateRandomNumbers = () => {
        const num1 = Math.floor(Math.random() * 10);
        const num2 = Math.floor(Math.random() * 10);
        setCaptchaNum1(num1);
        setCaptchaNum2(num2);
    };

    const sendMail = async (event) => {
        event.preventDefault();
        setIsSubmitted(true);

        if (parseInt(userAnswer) !== captchaNum1 + captchaNum2) {
            setIsSumValid(false);
            return;
        }

        setIsSending(true);

        try {
            const response = await fetch('/api/enquiryForm', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    productName,
                    email,
                    query,
                    quantity,
                    company,
                    shipmentType,
                    quantityType
                }),
            });

            if (response.ok) {
                console.log("success");
                alert('Thank You for your submitting enquiry request we will contact you soon');
                window.location.reload()
            } else {
                console.error("failure");
                alert('Error');
                window.location.reload()
            }
        } catch (error) {
            console.error("failure", error);
            alert('Error');
            window.location.reload()
        } finally {
            setIsSending(false);
        }
    };

    return (

        <>
            <div className='homeform-backround'>
                <form  className='border-2 border-[#F67712] rounded-2xl p-9' onSubmit={sendMail}>

                    <div className="inputWithIcon ">
                        <FaSeedling className=" ficon fa-lg fa-fw" />

                        <input type="text" placeholder="Product Name" name="product_name" value={productName}
                            onChange={(e) => setProductName(e.target.value)} />

                    </div>

                    <div className="inputWithIcon">
                        <IoIosMail className=" ficon" />

                        <input type="email" placeholder="Email" name="email" value={email}
                            onChange={(e) => setEmail(e.target.value)} required />
                        <i className="fa fa-envelope fa-lg fa-fw" aria-hidden="true"></i>
                    </div>


                    <div className="inputWithIcon">
                        <select name="shipment_type" value={shipmentType}
                            onChange={(e) => setShipmentType(e.target.value)} >
                            <option value="">Shipment Type</option>

                            {ShipmentTypeOptions.map((option) => (
                                <option key={option.value} value={option.value}>
                                    {option.label}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="inputWithIcon inputIconBg">
                        <div className="radio_box" >
                            <label htmlFor="" >Quantity In :  &nbsp; </label>
                            <input
                                type="radio"
                                name="quantity_type"
                                value="KGS"
                                checked={quantityType === 'KGS'}
                                onChange={() => setQuantityType('KGS')}
                            />
                            <label htmlFor="KGS" >  &nbsp; KGS  &nbsp; </label>

                            <input
                                type="radio"
                                name="quantity_type"
                                value="MTS"
                                checked={quantityType === 'MTS'}
                                onChange={() => setQuantityType('MTS')}
                            />
                            <label htmlFor="MTS" >  &nbsp; MTS</label>
                        </div>
                    </div>


                    <div className="inputWithIcon ">
                        <MdOutlineProductionQuantityLimits className=" ficon" />
                        <input type="number" placeholder="Quantity Required" name="quantity" value={quantity}
                            onChange={(e) => setQuantity(e.target.value)} />

                    </div>

                    <div className="inputWithIcon">
                        <FaBuilding className='ficon' />
                        <input type="text" placeholder="Company Name" name="company_name" value={company}
                            onChange={(e) => setCompany(e.target.value)} required />
                        <i className="fa-regular fa-building fa-lg fa-fw" aria-hidden="true"></i>
                    </div>
                    <div className="inputWithIcon">
                        <textarea placeholder="Write Your Query " name="query" value={query}
                            onChange={(e) => setQuery(e.target.value)} cols="5" rows="4" aria-invalid="false" style={{ padding: "10px", width: "100%" }} rel='' required></textarea>
                    </div>
                    <div className="captcha-box captcha-rq">
                        <div className="captcha-content captcha-rq-captcha-content">
                            <div className="captchaHeading">Captcha: {captchaNum1} + {captchaNum2} = ?</div>
                            <input
                                className="captcha-imput-field"
                                required
                                type="text"
                                placeholder="Enter sum"
                                value={userAnswer}
                                onChange={(e) => setUserAnswer(e.target.value)}

                            />

                        </div>
                        {isSubmitted && !userAnswer && (
                            <div className='captcha-validation'>&#9888; Please enter the sum first before submitting.</div>
                        )}
                        {!isSumValid && userAnswer && (
                            <div className='captcha-validation' >Invalid sum. Please enter the correct sum.</div>
                        )}
                        {isSumValid && userAnswer && parseInt(userAnswer) === (captchaNum1 + captchaNum2) && (
                            <div className='captcha-validatio-true' >Looks good!</div>
                        )}
                    </div>



                    <div className="inputWithIcon">
                        <button type="submit" className='Form_btn' style={{ width: "100%" }} disabled={isSending} ><span>{isSending ? 'Sending...' : 'Send Enquiry'} </span></button>
                    </div>
                </form>

            </div>

        </>
    )
}

export default Index