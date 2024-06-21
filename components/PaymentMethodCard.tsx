import React from 'react'
type PaymentMethodCardProps = {
    method: string;
    image: string;
    selected: boolean;
    onClick: () => void;
  }
export default function PaymentMethodCard({ method, image, selected, onClick }:PaymentMethodCardProps) {
  return (
    <div
      className={`flex items-center justify-start border-2 rounded-lg p-2 w-56 h-16 ${
        selected ? "border-green-500" : "border-gray-10"
      }`}
      onClick={onClick}
    >
        <p className="w-10 h-10 mb-2 bg-black-10 mx-2"></p>
      {/* <img src={image} alt={method} className="w-10 h-10 mb-2" /> */}
      <p className="text-lg font-semibold">{method}</p>
    </div>
  )
}
