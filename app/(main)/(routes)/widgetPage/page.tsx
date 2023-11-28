import CheckoutPage from "../checkoutPage/page"

import WidgetPreview from "../WidgetPreview/page"


export default function WidgetPage() {
  return(
    <div className="flex lg:flex-row md:flex-col flex-col justify-between gap-[5px] fixed w-[100%]">
        <div className="">
        <CheckoutPage />
        </div>

       <div className="lg:block hidden">
       <WidgetPreview />
       </div>

    </div>
  )
}

