import React from "react";
import { Text } from "react-native";
import {
  CardContainer,
  CardTitle,
  CardContent,
  CardImage,
  StyledTextInput,
} from "../styles/CardStyles";
import { Sup } from "../styles/DisclaimerContainer";
import { PrimaryButton, ButtonText } from "../styles/ButtonStyles";
import ProgressBar from "./ProgressBar";

function Card({
  title,
  content,
  imageUrl,
  showTextarea,
  placeholder,
  onButtonClick,
  buttonText,
  sup,
  url,
  setUrl,
  progress,
}) {
  return (
    <CardContainer>
      {imageUrl && <CardImage source={{ uri: imageUrl }} />}
      {title && <CardTitle>{title}</CardTitle>}
      <CardContent>
        <Text>{content}</Text>
        {sup && <Sup>{sup}</Sup>}
      </CardContent>
      {showTextarea && (
        <StyledTextInput
          value={url}
          onChangeText={(text) => setUrl(text)}
          placeholder={placeholder || "Enter your text"}
        />
      )}
      {progress > 0 && <ProgressBar progress={progress} />}
      {onButtonClick && buttonText && (
        <PrimaryButton onPress={onButtonClick}>
          <ButtonText>{buttonText}</ButtonText>
        </PrimaryButton>
      )}
    </CardContainer>
  );
}

export default Card;
