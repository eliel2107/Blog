import React, { Component } from "react";
import animationData from "./animation.json";

interface WhatsAnimationProps {
  width?: number;
  height?: number;
}

class WhatsAnimation extends Component<WhatsAnimationProps> {
  private containerRef = React.createRef<HTMLDivElement>();
  private Lottie?: any;

  async componentDidMount() {
    if (typeof window !== "undefined") {
      const lottie = await import("lottie-web");
      this.Lottie = lottie.default;
      this.createAnimation();
    }
  }

  componentDidUpdate(prevProps: WhatsAnimationProps) {
    if (
      this.props.width !== prevProps.width ||
      this.props.height !== prevProps.height
    ) {
      this.createAnimation();
    }
  }

  componentWillUnmount() {
    if (this.Lottie && this.containerRef.current) {
      this.Lottie.destroy();
    }
  }

  createAnimation = () => {
    const { width = 400, height = 400 } = this.props;

    if (this.containerRef.current && this.Lottie) {
      this.Lottie.destroy(); // Destroy any existing animation before creating a new one
      this.Lottie.loadAnimation({
        container: this.containerRef.current,
        renderer: "svg",
        loop: true,
        autoplay: true,
        animationData,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice",
          viewBoxSize: `${width} ${height}`,
        },
      });
    }
  };

  render() {
    return (
      <div
        ref={this.containerRef}
        style={{ width: this.props.width, height: this.props.height }}
      ></div>
    );
  }
}

export default WhatsAnimation;
