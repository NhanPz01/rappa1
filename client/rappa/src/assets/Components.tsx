import styled from 'styled-components';

interface SignInProps {
    signinIn: boolean;
}

export const ColoredBackground = styled.div`
    position: absolute; 
    background: linear-gradient(to right, #7dc0ff, #4f6fff);
    width: 100%;
    height: 100%;
    min-height: 20px;
    min-width: 20px;
    z-index: 1;      
    bottom: -10px;     
    right: -10px;      
`;

export const Bg = styled.div`
    display: flex;
    font-family: 'Press Start 2P', monospace; 
    font-weight: 1000;
    text-transform: uppercase;
    letter-spacing: 2px; 
    justify-content: center;
    align-items: center;    
    position: absolute; 
    background-color: white; 
    width: 100%;
    height: 100%;
    min-height: 20px;
    min-width: 20px;
    z-index: 1;
    bottom: 0px;     
    right: 0px;   
`;

export const GradientText = styled.span`
  background: linear-gradient(to right, #2396fa, #7700FF);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const Container = styled.div`
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
    position: relative;
    overflow: hidden;
    width: 678px;
    max-width: 100%;
    min-height: 400px;
`;

export const SignUpContainer = styled.div<SignInProps>`
    position: absolute;
    top: 0;
    height: 100%;
    transition: all 0.6s ease-in-out;
    left: 0;
    width: 50%;
    opacity: 0;
    z-index: 1;
    ${props => props.signinIn !== true ? `
        transform: translateX(100%);
        opacity: 1;
        z-index: 5;
    ` : null}
`;

export const SignInContainer = styled.div<SignInProps>`
    position: absolute;
    top: 0;
    height: 100%;
    transition: all 0.6s ease-in-out;
    left: 0;
    width: 50%;
    z-index: 2;
    ${props => (props.signinIn !== true ? `transform: translateX(100%);` : null)}
`;

export const Form = styled.form`
    background-color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 0 50px;
    height: 100%;
    text-align: center;
`;

export const Title = styled.h1`
    font-weight: bold;
    margin: 0;
`;

export const GradientTitle = styled(Title)`
    background: linear-gradient(to right, #47B5FF, #7700FF);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-top: 0px;
`;

export const Input = styled.input`
    background-color: #eee;
    border: none;
    padding: 12px 15px;
    margin: 8px 0;
    width: 100%;
`;

export const Button = styled.button`
    border-width: 0px;
    border-radius: 20px;
    background-color: #47B5FF;
    color: #ffffff;
    font-size: 12px;
    font-weight: bold;   
    padding: 12px 45px;
    letter-spacing: 1px;
    text-transform: uppercase;
    transition: transform 80ms ease-in, border 80ms ease-in;
    &:active {
        transform: scale(0.95);
        border-color: #ffffff;
        border-width: 2.5px;
    }
    &:focus {
        outline: none;
    }
`;

export const GradiantButton = styled.button`
    border-width: 0px;
    border-radius: 20px;
    background: -webkit-linear-gradient(to right, #0088ff, #7700ff);
    background: linear-gradient(to right, #0088ff, #7700ff);
    color: #ffffff;
    font-size: 12px;
    font-weight: bold;   
    padding: 12px 45px;
    letter-spacing: 1px;
    text-transform: uppercase;
    transition: transform 80ms ease-in, border 80ms ease-in;
    &:active {
        transform: scale(0.95);
        border-color: #ffffff;
        border-width: 2.5px;
    }
    &:focus {
        outline: none;
    }
`;

export const GhostButton = styled(Button)`
    background-color: transparent;
    border-color: #ffffff;
`;

export const Anchor = styled.a`
    color: #333;
    font-size: 14px;
    text-decoration: none;
    margin: 15px 0;
`;

export const OverlayContainer = styled.div<SignInProps>`
    position: absolute;
    top: 0;
    left: 50%;
    width: 50%;
    height: 100%;
    overflow: hidden;
    transition: transform 0.6s ease-in-out;
    z-index: 100;
    ${props => props.signinIn !== true ? `transform: translateX(-100%);` : null}
`;

export const Overlay = styled.div<SignInProps>`
    background: #7700ff;
    background: -webkit-linear-gradient(to right, #0088ff, #7700ff);
    background: linear-gradient(to right, #0088ff, #7700ff);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 0 0;
    color: #ffffff;
    position: relative;
    left: -100%;
    height: 100%;
    width: 200%;
    transform: translateX(0);
    transition: transform 0.6s ease-in-out;
    ${props => (props.signinIn !== true ? `transform: translateX(50%);` : null)}
`;

export const OverlayPanel = styled.div`
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 0 40px;
    text-align: center;
    top: 0;
    height: 100%;
    width: 50%;
    transform: translateX(0);
    transition: transform 0.6s ease-in-out;
`;

export const LeftOverlayPanel = styled(OverlayPanel) <SignInProps>`
   transform: translateX(-20%);
   ${props => props.signinIn !== true ? `transform: translateX(0);` : null}
`;

export const Paragraph = styled.p`
 font-size: 14px;
   font-weight: 100;
   line-height: 20px;
   letter-spacing: 0.5px;
   margin: 20px 0 30px
`;

export const RightOverlayPanel = styled(OverlayPanel) <SignInProps>`
    right: 0;
    transform: translateX(0);
    ${props => props.signinIn !== true ? `transform: translateX(20%);` : null}
`;
