{\rtf1\ansi\ansicpg1252\cocoartf2822
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 async function getJourney() \{\
    const batchId = document.getElementById('batchId').value;\
    \
    // Connect to the Blockchain (using a provider like MetaMask or Infura)\
    const provider = new ethers.providers.Web3Provider(window.ethereum);\
    const contractAddress = "0x1351abC61c62915fb3FDf6c804e716ec9e7DF01C";\
    \
    // The "ABI" tells the website how to talk to your specific code\
    const abi = [ "function batches(uint256) view returns (string, string, uint8, uint256, address)" ];\
    const contract = new ethers.Contract(contractAddress, abi, provider);\
\
    // Fetch data from the blockchain\
    const data = await contract.batches(batchId);\
\
    // Update the UI\
    document.getElementById('results').style.display = 'block';\
    document.getElementById('displayFarm').innerText = data[0];\
    document.getElementById('displayOrigin').innerText = data[1];\
    \
    const statuses = ["Harvested", "Processed", "Shipped", "Delivered"];\
    document.getElementById('displayStatus').innerText = statuses[data[2]];\
\}}
