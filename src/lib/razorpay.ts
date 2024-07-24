// @lib/razorpay.ts

export const loadRazorpay = () =>
    new Promise<any>((resolve, reject) => {
      if (window.Razorpay) {
        return resolve(window.Razorpay);
      }
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => resolve(window.Razorpay);
      script.onerror = () => reject(new Error("Failed to load Razorpay script"));
      document.body.appendChild(script);
    });
  
