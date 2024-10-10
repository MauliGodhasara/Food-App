export default function CartLayout({ children }) {
    return (
      <div>
        <h2 className="text-center mt-10">Your Cart</h2>
        <div className="p-5">{children}</div>
      </div>
    );
  }
  