import { useState } from "react";
import { View, Image, ActivityIndicator } from "react-native";
import IMAGES from "../../assets/images";

type ImageStyle = {
	width: any;
	height: any;
};

interface CustomImageType {
	path: string;
	imageSize: ImageStyle;
	imageStyle?: any;
}

const CustomImage = ({ path, imageSize, imageStyle }: CustomImageType) => {
	const [error, setError] = useState(false);
	const [loading, setLoading] = useState(true);

	const onImageLoadEnd = () => setLoading(false);
	const onImageError = () => {
		setLoading(false);
		setError(true);
	};

	return (
		<>
			{loading && <ActivityIndicator />}
			{error ? (
				<Image source={IMAGES.MENU_DEFAULT} style={[imageSize]} />
			) : (
				<Image
					source={{ uri: path }}
					style={[imageSize, imageStyle]}
					onLoad={onImageLoadEnd}
					onError={onImageError}
				/>
			)}
		</>
	);
};

export default CustomImage;
