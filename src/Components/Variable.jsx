export const Variable = (props) => {
  let { icon: Icon, variableName, value } = props;
  return (
    <div className="variable">
      <div className="iconWithName">
        <Icon size="2.5em" />
        <p>{variableName}</p>
      </div>
      <div className="value">
        <p>{value}</p>
      </div>
    </div>
  );
};
