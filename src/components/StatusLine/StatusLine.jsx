import classNames from "classnames";

import "./statusLine.scss";

function StatusLine({ ok, setOk, error, setError }) {
  if (ok) {
    setTimeout(() => {
      setOk(false);
    }, 5000);
  }
  if (error) {
    setTimeout(() => {
      setError(false);
    }, 5000);
  }

  return (
    <div>
      <div className={classNames("okLine", { active: ok })}></div>
      <div className={classNames("errorLine", { active: error })}></div>
    </div>
  );
}

export default StatusLine;
