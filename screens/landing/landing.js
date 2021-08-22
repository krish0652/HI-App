import React, { Component } from "react";
import { ImageBackground, Text, View } from "react-native";
import LoginComponent from "../../components/session/loginComponent";
import { commonStyles } from "../../styles/common/common.styles";
import { landingStyles } from "../../styles/components/screens/landing.screen.style";

class LandingScreen extends Component {
    constructor(props) {
        super(props);

        this.state = {
            type: 'login'
        }
    }

    render() {
        const banner = { uri: "./assets/home-interior.png" };
        return(
            <View style={[commonStyles.container, landingStyles.container]}>
                <ImageBackground source={require( "../../assets/home-interior.png")} resizeMode="cover" style={landingStyles.image}>
                    <View style={landingStyles.welcomeContainer}>
                        <Text style={landingStyles.welcomeText}>Experience the best HomeInspections</Text>
                    </View>
                    <View style={landingStyles.loginContainer}>
                       <LoginComponent/>
                    </View>
                </ImageBackground>
            </View>
        )
    }
};

export default LandingScreen;