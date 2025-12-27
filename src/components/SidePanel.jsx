export default function SidePanel(params) {
  return (
    <div className="w-full px-4">
      <div className="my-4 font-bold uppercase">
        <h2>Categories</h2>
      </div>
      <div className="uppercase font-normal">
        <ul className="flex flex-col">
          <li className="space-x-4">General supplies</li>
          <li>Beddings</li>
          <li>Kitchen wear</li>
          <li>Mens shoes</li>
          <li>Women shoes</li>
          <li>Children shoes</li>
        </ul>
      </div>
    </div>
  );
}
