"use client"; // Ensure this component is treated as a client component

import { Heading } from "@medusajs/ui";
import LocalizedClientLink from "@modules/common/components/localized-client-link";
import React, { useState, MouseEvent } from "react";

const Help = () => {
  const [isReturnsPopupVisible, setIsReturnsPopupVisible] = useState(false);
  const [isContactPopupVisible, setIsContactPopupVisible] = useState(false);
  const [product, setProduct] = useState('Product Name'); // Replace with actual product data
  const [orderNumber, setOrderNumber] = useState('Order Number'); // Replace with actual order number
  const [customerName, setCustomerName] = useState('Customer Name'); // Replace with actual customer name
  const [address, setAddress] = useState('Customer Address'); // Replace with actual address
  const [orderPlacedTime, setOrderPlacedTime] = useState('Order Placed Time'); // Replace with actual order placed time

  const handleReturnsClick = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setIsReturnsPopupVisible(true);
  };

  const handleContactClick = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setIsContactPopupVisible(true);
  };

  const closeReturnsPopup = () => {
    setIsReturnsPopupVisible(false);
  };

  const closeContactPopup = () => {
    setIsContactPopupVisible(false);
  };

  const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=jaanussri2110611@ssn.edu.in&su=Request%20to%20Return%20Product&body=I%20would%20like%20to%20return%20the%20following%20product:%0D%0AProduct:%20${encodeURIComponent(product)}%0D%0AOrder%20Number:%20${encodeURIComponent(orderNumber)}%0D%0ACustomer%20Name:%20${encodeURIComponent(customerName)}%0D%0AAddress:%20${encodeURIComponent(address)}%0D%0AOrder%20Placed%20Time:%20${encodeURIComponent(orderPlacedTime)}%0D%0AThank%20you.`;

  return (
    <div className="mt-6">
      <Heading className="text-base-semi">Need help?</Heading>
      <div className="my-2 text-base-regular">
        <ul className="flex flex-col gap-y-2">
          <li>
            <a href="/Contact" onClick={handleContactClick}>
              Contact
            </a>
          </li>
          <li>
            <a href="/Returns" onClick={handleReturnsClick}>
              Returns & Exchanges
            </a>
          </li>
        </ul>
      </div>
      {isReturnsPopupVisible && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <h2 className="text-lg font-semibold">Returns & Exchanges</h2>
            <p>
              To request a return, copy and send the following email:
            </p>
            <textarea
              value={`Subject: Request to Return Product\n\nI would like to return the following product:\nProduct: ${product}\nOrder Number: ${orderNumber}\nCustomer Name: ${customerName}\nAddress: ${address}\nOrder Placed Time: ${orderPlacedTime}\nThank you.`}
              readOnly
              className="w-full h-32 p-2 mt-2 border rounded"
            />
            <a
              href={gmailLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-4 py-2 mt-4 text-white bg-blue-500 rounded-lg"
            >
              Open Gmail
            </a>
            <button
              onClick={closeReturnsPopup}
              className="px-4 py-2 mt-4 text-white bg-gray-500 rounded-lg"
            >
              Close
            </button>
          </div>
        </div>
      )}
      {isContactPopupVisible && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <h2 className="text-lg font-semibold">Contact</h2>
            <p>
              Feel free to contact us ^_^
            </p>
            <p className="mt-2 text-blue-500">
              
              <a href="mailto:jaanussri2110611@ssn.edu.in">
                Click here to mail your query
              </a>
            </p>
            <button
              onClick={closeContactPopup}
              className="px-4 py-2 mt-4 text-white bg-gray-500 rounded-lg"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Help;