import React, { useState } from "react";
import styled from "@emotion/native";

export const CardContainer = styled.View`
  background: #fff;
  border-radius: 8px;
  border: 1px solid #1da1f2;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  width: 85%;
  padding: 16px;
  margin: 16px;
  margin-top: 0;
  padding-top: 8px;
`;

export const CardTitle = styled.Text`
  font-size: 24px;
  color: #333;
`;

export const CardContent = styled.Text`
  padding: 2px 0;
  margin-left: 0;
  font-size: 16px;
`;

export const CardImage = styled.Image`
  width: 100%;
  height: auto;
  border-radius: 5px;
  margin-bottom: 10px;
`;

export const CardTextarea = styled.TextInput`
  width: 100%;
  padding: 10px;
  margin-top: 10px;
  border: 1px solid #1da1f2;
  border-radius: 5px;
  box-sizing: border-box;
  font-size: 16px;
`;

export const StyledTextInput = ({ placeholder, ...props }) => {
  const [isFocused, setIsFocused] = React.useState(false);

  return (
    <CardTextarea
      placeholder={placeholder}
      placeholderTextColor="#ccc"
      style={{
        borderColor: isFocused ? "rgba(29, 161, 242, 0.5)" : "#1DA1F2",
        borderWidth: isFocused ? 2 : 1,
      }}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      {...props}
    />
  );
};
