import React, { Component } from "react";

import { ErrorIndicator } from "../error-indicator";

export default class ErrorBounary extends Component {
  //теперь мы легко можем отлавливать ошибки на всех уровнях приложения
  state = {
    error: false,
  };

  componentDidCatch() {
    this.setState({ error: true });
  }

  render() {
    if (this.state.error) {
      return <ErrorIndicator />;
    }

    //Возвращаем все, что будет написано внутри наших тегов
    return this.props.children;
  }
}
