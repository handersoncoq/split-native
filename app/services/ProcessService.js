// import axios from "axios";
// import { Platform, Alert } from "react-native";
// import RNFetchBlob from "rn-fetch-blob"; // You need to install this package

// export const processYoutubeUrl = async (youtubeUrl, onProgress) => {
//   const baseUrl = "http://localhost:4000";
//   if (!youtubeUrl) {
//     Alert.alert("Please paste a URL");
//     return;
//   }

//   onProgress(0);
//   let progress = 0;
//   const incrementProgress = () => {
//     if (progress < 95) {
//       progress += 5;
//       onProgress(progress);
//     }
//   };

//   const timer = setInterval(incrementProgress, 1000);

//   try {
//     const response = await axios({
//       method: "GET",
//       url: `${baseUrl}/download?url=${encodeURIComponent(youtubeUrl)}`,
//       responseType: "blob",
//     });

//     clearInterval(timer);
//     onProgress(100);

//     const mimeType = response.headers["content-type"] || "audio/webm";
//     const contentDisposition = response.headers["content-disposition"];
//     let filename = "download";
//     if (contentDisposition) {
//       const matches = /filename="?([^"]+)"?/.exec(contentDisposition);
//       if (matches && matches[1]) {
//         filename = matches[1];
//       }
//     }

//     const blob = new Blob([response.data], { type: mimeType });
//     const filePath = `${RNFetchBlob.fs.dirs.DownloadDir}/${filename}`;

//     if (Platform.OS === "android") {
//       await RNFetchBlob.fs.writeFile(filePath, response.data, "base64");
//       RNFetchBlob.android.actionViewIntent(filePath, mimeType);
//     } else {
//       await RNFetchBlob.fs.writeFile(filePath, response.data, "base64");
//       RNFetchBlob.ios.previewDocument(filePath);
//     }
//   } catch (error) {
//     clearInterval(timer);
//     console.error("Error processing url:", error);
//     Alert.alert("Error processing URL. Please try again");
//     onProgress(0);
//   }
// };
