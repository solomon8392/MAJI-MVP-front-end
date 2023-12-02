"use client";
import CheckoutPage from "../checkoutPage/page";

import WidgetPreviewPage from "../widgetPreview/page";

export default function WidgetPage() {
  return (
    <div className="flex lg:flex-row md:flex-col flex-col justify-between  fixed w-[100%]">
      <div className="">
        <CheckoutPage />
      </div>

      <div className="lg:block w-[50%] md:hidden hidden">
        <WidgetPreviewPage />
      </div>
    </div>
  );
}
