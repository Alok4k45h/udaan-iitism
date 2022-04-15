import React, { useState } from "react";
import "./ExpandCollapseModal.css";
import { Collapse } from "react-bootstrap";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

function ExpandCollapseModal() {
  const [open, setOpen] = useState(false);
  let arrowIcon;
  if (open) {
    arrowIcon = <FaAngleUp className="icon-angle mr-3" />;
  } else {
    arrowIcon = <FaAngleDown className="icon-angle mr-3" />;
  }
  return (
    <div>
      <div className="">
        <div className="container">
          <div className="row ">
            <div className="col-12">
              <div className="text-section">
                <div
                  onClick={() => setOpen(!open)}
                  aria-controls="example-collapse-text"
                  aria-expanded={open}
                  className="p-3"
                >
                  <h1 className="question-text">
                    {arrowIcon}
                    Anim pariatur cliche reprehenderit, enim eiusmod high life
                  </h1>
                </div>
                <Collapse in={open}>
                  <div id="example-collapse-text" className="answer-text">
                    Lorem ipsum dolor sit amet consectetur adipiscing elit
                    consequat sociosqu phasellus dictum tincidunt, ante
                    vulputate natoque duis egestas hac libero donec id vitae
                    volutpat integer imperdiet, aenean justo purus sed morbi
                    torquent penatibus mollis posuere quam habitasse. Molestie
                    sed netus sapien donec inceptos nostra vivamus semper platea
                    lobortis volutpat, imperdiet eget gravida orci erat posuere
                    mattis fames nulla. Sollicitudin sodales non vestibulum
                    vehicula quis venenatis egestas id dictumst, semper
                    convallis nam donec facilisi aenean neque. Tristique sapien
                    cubilia fusce quam porttitor etiam torquent arcu,
                    scelerisque vitae mauris nibh litora bibendum sed, senectus
                    elementum per dui felis ultrices mattis. Facilisis ridiculus
                    curabitur convallis platea senectus orci at conubia nisl,
                    rhoncus morbi nec cum vitae in aptent purus semper, magnis
                    tellus placerat tincidunt vestibulum dui malesuada
                    pellentesque. Condimentum integer volutpat purus nulla leo
                    nostra maecenas quisque cum rhoncus laoreet mattis, quam
                    nullam aenean ultricies nisi lacinia morbi vivamus massa
                    tellus odio. Malesuada posuere purus semper feugiat sociis
                    ornare sed orci lectus, placerat facilisis quisque rhoncus
                    consequat suscipit turpis litora vestibulum massa, dui
                    convallis conubia erat imperdiet fusce natoque dictum.
                    Dictum nisi netus lacinia phasellus venenatis ad sociosqu
                    posuere pellentesque rhoncus, lectus natoque ullamcorper
                    mauris nunc placerat a volutpat tortor suscipit convallis,
                    hendrerit eleifend in pulvinar inceptos curabitur rutrum
                    feugiat porttitor. Ridiculus luctus metus nec hac inceptos
                    mollis cum faucibus dis sagittis phasellus, mus morbi enim
                    quam natoque nibh class non ullamcorper platea. Lectus
                    fermentum gravida ullamcorper donec egestas hendrerit urna
                    et pretium enim, fringilla inceptos venenatis quisque neque
                    suspendisse facilisi porttitor laoreet.
                  </div>
                </Collapse>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExpandCollapseModal;
