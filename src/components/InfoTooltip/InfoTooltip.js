import React from "react";
import { usePopupClose } from "../../hooks/usePopupClose";
import tooltipStatusFailed from "../../images/popup__auth-failed.svg";
import tooltipStatusSuccess from "../../images/popup__auth-success.svg";
import "./InfoTooltip.css";

const InfoTooltip = ({ isOpen, onClose, tooltipStatus }) => {
  usePopupClose(isOpen, onClose);
  return (
    <div className={`popup popup_type_tooltip ${isOpen && " popup_opened"}`}>
      <div className="popup__container popup__container_type_tooltip">
        <button
          type="button"
          className="popup__close"
          aria-label="Закрыть"
          onClick={onClose}
        ></button>
        <img
          className="popup__img-tooltip"
          src={tooltipStatus ? tooltipStatusSuccess : tooltipStatusFailed}
          alt="Иконка статуса попапа"
        />
        <h2 className="popup__title">
          {tooltipStatus
            ? "Успешно!"
            : "Что-то пошло не так! Попробуйте ещё раз."}
        </h2>
      </div>
    </div>
  );
};

export default InfoTooltip;
