export default function OrderLayout({ children }) {
    return (
      <div>
        <h2 className="text-center mt-10">Your Order</h2>
        <div className="p-5">{children}</div>
      </div>
    );
  }
  