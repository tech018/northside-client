const Footer = () => {
  const footer = [
    {
      id: 1,
      name: "contacts",
    },
    {
      id: 2,
      name: "payments",
    },
    {
      id: 3,
      name: "shipping",
    },
    {
      id: 4,
      name: "privacy policy",
    },
    {
      id: 5,
      name: "ns store locations",
    },
  ];
  return (
    <div className="text-center">
      <div className="flex flex-nowrap item-center justify-center gap-3 cursor-pointer">
        {footer.map((i) => (
          <span className="uppercase" key={i.id}>
            {i.name}
          </span>
        ))}
      </div>

      <span className="text-sm">
        {" "}
        North Side © {new Date().getFullYear()} - All rights reserved.
      </span>
    </div>
  );
};

export default Footer;
