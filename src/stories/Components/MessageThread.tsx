type MessageProps = {
  text: string;
  isCurrent: boolean;
  avatarurl: "https://img.freepik.com/premium-photo/graphic-designer-digital-avatar-generative-ai_934475-9292.jpg";
  isFirstMessage: boolean;
};

function showMessage(props: MessageProps) {
  if (props.isCurrent) {
    return (
      <div className="flex flex-row">
        <div className="ml-8"></div>

        <div className="flex flex-row justify-end text-wrap ml-12 my-0.5 w-80 rounded-lg bg-blue-300 border border-gray-100 rounded-lg">
          <div className=" chat-bubble justify-end mr-2 py-1 pl-6 text-black max-w-80 break-words">
            {props.text}
          </div>
        </div>
        <div>
          {props.isFirstMessage ? (
            <img
              className="h-8 w-8 rounded-full"
              src="https://img.freepik.com/premium-photo/graphic-designer-digital-avatar-generative-ai_934475-9292.jpg"
            />
          ) : (
            <div className="ml-8 h-8"></div>
          )}
        </div>
      </div>
    );
  } else {
    return (
      <div className="flex flex-row">
        <div>
          {props.isFirstMessage ? (
            <img
              className="h-8 w-8 rounded-full"
              src="https://img.freepik.com/premium-photo/graphic-designer-digital-avatar-generative-ai_934475-9292.jpg"
            />
          ) : (
            <div className="mr-8 h-8"></div>
          )}
        </div>

        <div className="flex flex-row mr-12 w-80 my-0.5 rounded-lg bg-gray-100 border border-gray-100 rounded-lg">
          <div className="ml-2 chat-bubble py-1 text-black py-1 pr-6 text-black max-w-80 break-words">
            {props.text}
          </div>
        </div>
        <div className="mr-8"></div>
      </div>
    );
  }
}

const message1 = {
  text: "hello",
  isCurrent: true,
  avatarurl:
    "https://img.freepik.com/premium-photo/graphic-designer-digital-avatar-generative-ai_934475-9292.jpg",
  isFirstMessage: true,
};

const message2 = {
  text: "how are you?",
  isCurrent: true,
  avatarurl:
    "https://img.freepik.com/premium-photo/graphic-designer-digital-avatar-generative-ai_934475-9292.jpg",
  isFirstMessage: false,
};

const message3 = {
  text: "good, thank you how are you?",
  isCurrent: false,
  avatarurl:
    "https://img.freepik.com/premium-photo/graphic-designer-digital-avatar-generative-ai_934475-9292.jpg",
  isFirstMessage: true,
};

const message4 = {
  text: "great",
  isCurrent: true,
  avatarurl:
    "https://img.freepik.com/premium-photo/graphic-designer-digital-avatar-generative-ai_934475-9292.jpg",
  isFirstMessage: true,
};

const message5 = {
  text: "asdngmkldfmsgkldmgklmfdlkgnsdjfngjdnskglndksfmgkldsfmgklsdfmgklsmdgkflmsdklfgmksdlfmgksdlfmgkdsm",
  isCurrent: false,
  avatarurl:
    "https://img.freepik.com/premium-photo/graphic-designer-digital-avatar-generative-ai_934475-9292.jpg",
  isFirstMessage: true,
};

const message6 = {
  text: "nkfalsdgmakdfmglkdsmgkldfmgkmdlgkmfdsklgmksldfmgksdmgklmsdflgkmsdklfgmksdlmgka dg macvl xmbklcmvbkmc,v.mb.xc,mvbklgmds",
  isCurrent: true,
  avatarurl:
    "https://img.freepik.com/premium-photo/graphic-designer-digital-avatar-generative-ai_934475-9292.jpg",
  isFirstMessage: true,
};

const MessageArray = [
  message1,
  message2,
  message3,
  message4,
  message5,
  message6,
];

export function MessageThread() {
  return (
    <div className="flex flex-col">
      <div>{MessageArray.map((message) => showMessage(message))}</div>
    </div>
  );
}

/*<div className="flex flex-column mx-1.5">left avatar </div>
      <div className="flex flex-column mx-20">MessageThread column</div>
      <div className="flex flex-column mx-1.5"> right avatar</div> */
