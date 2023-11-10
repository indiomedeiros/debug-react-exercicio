import {
  MessageBox,
  MessageContainer,
  UsernameContainer
} from "./StyledMessage";

export function Message(props) {


  let position;
  let username;

  if (props.message.user === "eu") {
    position = "right";
  } else {
    position = "left";
    username = <UsernameContainer>{props.message.user}</UsernameContainer>;
  }

  return (
    //desafio de apagar a mensagem = onDoubleClick
    <MessageContainer onDoubleClick={onDoubleClick}>
      <MessageBox position={position}>
        {username}
        {props.message.text}
      </MessageBox>
    </MessageContainer>
  );
}
