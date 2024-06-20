const Icon = ({ icon }) => {
  const iconList = {
    undefined: (<svg></svg>)
  };
  return <>{!!icon ? iconList[icon] : iconList["undefined"]}</>;
};

export default Icon;
