import { Url } from "url";
import "../../index.css";

//Needs -  name, time, image url, post description, likes, comments,

type PostProps = {
  name: string;
  groupName: string;
  time: number;
  avatarurl: string;
  imgurl: string;
  postdesc: string;
  numlikes: number;
  numcomments: number;
};

function calcTime(timePosted: number) {
  const d = new Date();
  let currentTime = d.getTime();
  return currentTime - timePosted;
}

export function Post(props: PostProps) {
  const time = calcTime(props.time);
  return (
    <div className="flex flex-row">
      <img
        className="flex flex-col rounded-full w-12 h-12"
        src={props.avatarurl}
        alt="image description"
      />
      <div className="flex-1 flex-col">
        <div className="flex flex-row">
          <p className="font-bold text-black mr-1.5">{props.name}</p>
          <p className="text-gray-500"> in {props.groupName}</p>
        </div>

        <p className="text-gray-500 text-sm pb-1.5"> {time} milliseconds ago</p>
        <img className="h-80 w-80 rounded-lg" src={props.imgurl} />
        <p className="text-lg text-gray-800 py-1">{props.postdesc}</p>
        <div className="flex-col"></div>
        <div className="flex flex-row">
          <img
            className="h-6 w-6"
            src="https://logowik.com/content/uploads/images/940_like_icon.jpg"
          />
          <p className="mx-1.5"> {props.numlikes} likes </p>
          <img
            className="h-6 w-6"
            src="https://icons.veryicon.com/png/o/hardware/jackdizhu_pc/comment-25.png"
          />
          <p className="mx-1.5"> {props.numcomments} comments</p>
        </div>
      </div>
    </div>
  );
}
