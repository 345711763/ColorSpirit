import React from "react";
const StrokeColor = React.createContext("#000000");// by default ,color is black

export const StrokeColorProvider = StrokeColor.Provider;
export const StrokeColorConsumer = StrokeColor.Consumer;