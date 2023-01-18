import { PlusOutlined, MinusOutlined } from "@ant-design/icons";
import { Collapse, theme } from "antd";
import "./faq.css";
const { Panel } = Collapse;
const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

const Faq = () => {
  const { token } = theme.useToken();
  const panelStyle = {
    marginBottom: 24,
    background: "transparent",
    borderRadius: token.borderRadiusLG,
    border: "none",
  };
  return (
    <section id="faq">
      <div className="container">
        <div className="fn_cs_title">
          <div className="divider" data-color="1">
            <div className="line"></div>
            <div className="middle"></div>
            <div className="left1"></div>
            <div className="left2"></div>
            <div className="right1"></div>
            <div className="right2"></div>
          </div>
          <h3 className="title" data-color="black">
            FAQ
          </h3>
          <p className="desc fn_animated_text" data-color="black">
            This is your chance to take your reader on a journey. What have you
            achieved along the way and what do you envision next? Developing a
            narrative is really quite simple if you follow a template, like the
            one below. As you fill in your template, consider the characters and
            the setting, the problem you solved, the obstacles you hit, the
            milestones you achieve, and what your brand's future looks like.
          </p>
        </div>
      </div>

      <div className="container">
        <div className="gap-3 sm:flex w-full">
          <Collapse
            accordion
            bordered={false}
            defaultActiveKey={["1"]}
            expandIcon={({ isActive }) =>
              !isActive ? (
                <div className="bg-white p-3 rounded-full">
                  <PlusOutlined
                    style={{ fontSize: "15px", fontWeight: "700" }}
                  />
                </div>
              ) : (
                <div className="bg-white p-3 rounded-full">
                  <MinusOutlined
                    style={{ fontSize: "15px", fontWeight: "700" }}
                  />
                </div>
              )
            }
            expandIconPosition="end"
            style={{
              background: token.colorBgContainer,
              width: "100%",
            }}>
            <Panel
              header="This is panel header 1"
              key="1"
              style={panelStyle}
              className="font-medium m-0 text-lg uppercase">
              <p>{text}</p>
            </Panel>
            <Panel
              header="This is panel header 2"
              key="2"
              style={panelStyle}
              className="font-medium m-0 text-lg uppercase">
              <p>{text}</p>
            </Panel>
            <Panel
              header="This is panel header 3"
              key="3"
              style={panelStyle}
              className="font-medium m-0 text-lg uppercase">
              <p>{text}</p>
            </Panel>
          </Collapse>
          <Collapse
            expandIconPosition="end"
            accordion
            bordered={false}
            defaultActiveKey={["1"]}
            expandIcon={({ isActive }) =>
              !isActive ? (
                <div className="bg-white p-3 rounded-full">
                  <PlusOutlined
                    style={{ fontSize: "15px", fontWeight: "700" }}
                  />
                </div>
              ) : (
                <div className="bg-white p-3 rounded-full">
                  <MinusOutlined
                    style={{ fontSize: "15px", fontWeight: "700" }}
                  />
                </div>
              )
            }
            style={{
              background: token.colorBgContainer,
              width: "100%",
            }}>
            <Panel
              header="This is panel header 1"
              key="1"
              style={panelStyle}
              className="font-medium m-0 text-lg uppercase">
              <p>{text}</p>
            </Panel>
            <Panel
              header="This is panel header 2"
              key="2"
              style={panelStyle}
              className="font-medium m-0 text-lg uppercase">
              <p>{text}</p>
            </Panel>
            <Panel
              header="This is panel header 3"
              key="3"
              style={panelStyle}
              className="font-medium m-0 text-lg uppercase">
              <p>{text}</p>
            </Panel>
          </Collapse>
        </div>
      </div>
    </section>
  );
};

export default Faq;
