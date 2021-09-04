import React from "react";
import theme from "theme";
import { Theme, Link } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml } from "@quarkly/components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"404"} />
		<Helmet>
			<title>
				Kiews
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/60f12b580c45e4001752d5f4/images/Artboard%202@2x.png?v=2021-08-28T10:28:38.157Z"} type={"image/x-icon"} />
			<link rel={"apple-touch-icon"} href={"https://uploads.quarkly.io/60f12b580c45e4001752d5f4/images/Artboard%202@2x.png?v=2021-08-28T10:28:38.157Z"} />
			<link rel={"apple-touch-icon"} sizes={"76x76"} href={"https://uploads.quarkly.io/60f12b580c45e4001752d5f4/images/Artboard%202@2x.png?v=2021-08-28T10:28:38.157Z"} />
			<link rel={"apple-touch-icon"} sizes={"152x152"} href={"https://uploads.quarkly.io/60f12b580c45e4001752d5f4/images/Artboard%202@2x.png?v=2021-08-28T10:28:38.157Z"} />
			<link rel={"apple-touch-startup-image"} href={"https://uploads.quarkly.io/60f12b580c45e4001752d5f4/images/Artboard%202@2x.png?v=2021-08-28T10:28:38.157Z"} />
			<meta name={"msapplication-TileImage"} content={"https://uploads.quarkly.io/60f12b580c45e4001752d5f4/images/Artboard%202@2x.png?v=2021-08-28T10:28:38.157Z"} />
		</Helmet>
		<Link
			font={"--capture"}
			font-size={"10px"}
			position={"fixed"}
			bottom={"12px"}
			right={"12px"}
			z-index={"4"}
			border-radius={"4px"}
			padding={"5px 12px 4px"}
			background-color={"--dark"}
			opacity={"0.6"}
			hover-opacity={"1"}
			color={"--light"}
			cursor={"pointer"}
			transition={"--opacityOut"}
			quarkly-title={"Badge"}
			text-decoration-line={"initial"}
			href={"https://quarkly.io/"}
			target={"_blank"}
		>
			Made on Quarkly
		</Link>
		<RawHtml>
			<style place={"endOfHead"} rawKey={"60f12b580c45e4001752d5f2"}>
				{":root {\n  box-sizing: border-box;\n}\n\n* {\n  box-sizing: inherit;\n}"}
			</style>
			<script place={"endOfHead"} rawKey={"612ce503ec4e87e22f968f7a"}>
				{"  !function(){var analytics=window.analytics=window.analytics||[];if(!analytics.initialize)if(analytics.invoked)window.console&&console.error&&console.error(\"Segment snippet included twice.\");else{analytics.invoked=!0;analytics.methods=[\"trackSubmit\",\"trackClick\",\"trackLink\",\"trackForm\",\"pageview\",\"identify\",\"reset\",\"group\",\"track\",\"ready\",\"alias\",\"debug\",\"page\",\"once\",\"off\",\"on\",\"addSourceMiddleware\",\"addIntegrationMiddleware\",\"setAnonymousId\",\"addDestinationMiddleware\"];analytics.factory=function(e){return function(){var t=Array.prototype.slice.call(arguments);t.unshift(e);analytics.push(t);return analytics}};for(var e=0;e<analytics.methods.length;e++){var key=analytics.methods[e];analytics[key]=analytics.factory(key)}analytics.load=function(key,e){var t=document.createElement(\"script\");t.type=\"text/javascript\";t.async=!0;t.src=\"https://cdn.segment.com/analytics.js/v1/\" + key + \"/analytics.min.js\";var n=document.getElementsByTagName(\"script\")[0];n.parentNode.insertBefore(t,n);analytics._loadOptions=e};analytics._writeKey=\"Bg4cKB52sPzxIh5sET0X2N7sruusenai\";analytics.SNIPPET_VERSION=\"4.13.2\";\n  analytics.load(\"Bg4cKB52sPzxIh5sET0X2N7sruusenai\");\n  analytics.page();\n  }}();"}
			</script>
			<script async={true} src={"https://www.googletagmanager.com/gtag/js?id=G-P7TELB1SSX"} place={"endOfHead"} rawKey={"612cec9031e04105c4802a7e"} />
			<style place={"endOfBody"} rawKey={"612f24b05eadf997cf3f9a15"}>
				{"a[href=\"https://quarkly.io/\"]{\ndisplay: none;\n}"}
			</style>
			<script place={"endOfHead"} rawKey={"6131bef605c75361d7783204"}>
				{"  window.dataLayer = window.dataLayer || [];\n  function gtag(){dataLayer.push(arguments);}\n  gtag('js', new Date());\n\n  gtag('config', 'G-P7TELB1SSX');"}
			</script>
		</RawHtml>
	</Theme>;
});