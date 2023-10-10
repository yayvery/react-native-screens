import * as React from 'react';
import Svg, { ClipPath, Defs, G, Path, Rect } from 'react-native-svg';
import Animated, {
  useAnimatedProps,
  useSharedValue,
  withDelay,
  withTiming,
} from 'react-native-reanimated';

const AnimatedSvg = Animated.createAnimatedComponent(Svg);

const SwmLogo = (props): JSX.Element => {
  const swmOpacity = useSharedValue(0);

  React.useEffect(() => {
    const timing = withTiming(1, { duration: 350 });
    swmOpacity.value = withDelay(350, timing);
  }, []);

  const animatedProps = useAnimatedProps(() => {
    return {
      opacity: swmOpacity.value,
    };
  });

  return (
    <AnimatedSvg
      width={74 * 1.5}
      height={40 * 1.5}
      style={{ marginBottom: -60 }}
      animatedProps={animatedProps}
      viewBox="0 0 74 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <G clipPath="url(#clip0_738_215)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M11.9946 0.115234H12.3739H72.8476H73.7652L73.7631 1.03209L73.7025 27.4563L73.7016 27.8326L73.4361 28.0993L62.1541 39.4327L61.8857 39.7023H61.505H1.03123H0.115723V38.7876V12.3633V11.9844L0.383869 11.7165L11.7265 0.383161L11.9946 0.115234ZM12.7531 1.94475L3.24145 11.4486H61.1257L70.6374 1.94475H12.7531ZM71.927 3.24346L62.4205 12.7422V36.5707L71.8723 27.0759L71.927 3.24346ZM1.94674 37.8728V13.2781H60.5895V37.8728H1.94674Z"
          fill="#F8F9FF"
        />
        <Path
          d="M16.6804 28.1822C16.6804 30.1822 15.4066 31.8792 12.1919 31.8792C10.7968 31.8792 9.70498 31.5762 8.67383 31.1519V28.4247C9.70498 28.9701 10.9787 29.2731 12.1312 29.2731C13.1624 29.2731 13.7083 28.9701 13.7083 28.364C13.7083 26.5459 8.67383 27.0913 8.67383 23.3337C8.67383 21.0307 10.5542 19.5762 13.1017 19.5762C14.1935 19.5762 15.164 19.8186 16.1951 20.4247V23.3337C14.8001 22.4853 13.8296 22.1822 13.041 22.1822C12.0705 22.1822 11.5853 22.5459 11.5853 23.0913C11.5853 24.8489 16.6804 24.1822 16.6804 28.1822Z"
          fill="#F8F9FF"
        />
        <Path
          d="M36.7575 19.8789L32.9362 31.6365H30.0248L27.4166 23.5759L24.869 31.6365H21.9575L18.1362 19.8789H21.4116L23.5346 27.7577L26.0215 19.8789H28.933L31.4198 27.7577L33.5428 19.8789C33.5428 19.8789 36.7575 19.8789 36.7575 19.8789Z"
          fill="#F8F9FF"
        />
        <Path
          d="M55.0149 23.8792V31.6368H52.1641V24.3641C52.1641 23.0913 51.2543 22.3641 50.2838 22.3641C49.2526 22.3641 48.4034 23.0913 48.4034 24.3641V31.6368H45.492V24.3641C45.492 23.0913 44.5821 22.3641 43.6116 22.3641C42.5805 22.3641 41.7313 23.0913 41.7313 24.3641V31.6368H38.8198V19.8792H41.5493V20.7277C42.3985 19.8792 43.3083 19.5762 44.4002 19.5762C45.6133 19.5762 46.7051 20.1216 47.4329 21.0913C48.4034 20.061 49.6165 19.5762 51.0116 19.5762C53.3165 19.6368 55.0149 21.3944 55.0149 23.8792Z"
          fill="#F8F9FF"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_738_215">
          <Rect width={74} height={40} fill="white" />
        </ClipPath>
      </Defs>
    </AnimatedSvg>
  );
};

export default SwmLogo;