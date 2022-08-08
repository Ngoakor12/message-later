import { BackArrowIcon, EditIcon, ForwardArrowIcon } from "../../Icons";

function MessageDetails() {
  return (
    <div>
      <div>
        <div>title</div>
        <div>
          <div>edit message</div>
          <div>
            <EditIcon />
          </div>
        </div>
      </div>
      <div>
        <div>time</div>
        <div>recipient name</div>
      </div>
      <div>
        <div>recipient name</div>
      </div>
      <div>
        <div>
          <div>previous message</div>
          <div>
            <BackArrowIcon />
          </div>
        </div>
        <div>
          <div>next message</div>
          <div>
            <ForwardArrowIcon />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MessageDetails;
