import React, { useState } from "react";
import "./index.css";
import ReactDOM from "react-dom/client";
import {
  Card,
  CardHeader,
  CardFooter,
  Heading,
  Button,
  Input,
  Container,
  ChakraProvider,
  Center,
} from "@chakra-ui/react";
import QRCode from "qrcode.react";

function Main() {
  const[urlInput,setUrlInput]=useState('');
  function getQrCode(){

  }
  return (
    <>
      <div className="container">
        <ChakraProvider>
          <Center h="100vh">
            <Card align="center" boxShadow="2xl" bg="white" m={10} p={10}>
              <CardHeader>
                <Heading color="#2B6CB0">QR Code Generator</Heading>
              </CardHeader>
              <Container>
                <Input variant="outline" placeholder="https://example.com" mt={10} onChange={(e) => setUrlInput(e.target.value)} value={urlInput} />
              </Container>
              <CardFooter>
                {urlInput&& <Button colorScheme="blue" mt={8} size="lg" onClick={getQrCode}>
                  Generate
                </Button>}
              </CardFooter>
            </Card>
          </Center>
        </ChakraProvider>
      </div>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Main />);
