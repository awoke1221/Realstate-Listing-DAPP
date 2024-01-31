/*

pinta IPFS API key

API Key: 0f2053dea67482e5b933
API Secret: bfae1ef0d6f46532d1a157024054109e6cb9665c481af8d4acfe1ea588b2e6cd
JWT: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiJjZGE0ZGIyYi04NTA5LTQ5ZTktYjMxOS1lYTJiMTIxM2MxZGMiLCJlbWFpbCI6ImV0aGlvemVtZW45QGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJwaW5fcG9saWN5Ijp7InJlZ2lvbnMiOlt7ImlkIjoiRlJBMSIsImRlc2lyZWRSZXBsaWNhdGlvbkNvdW50IjoxfSx7ImlkIjoiTllDMSIsImRlc2lyZWRSZXBsaWNhdGlvbkNvdW50IjoxfV0sInZlcnNpb24iOjF9LCJtZmFfZW5hYmxlZCI6ZmFsc2UsInN0YXR1cyI6IkFDVElWRSJ9LCJhdXRoZW50aWNhdGlvblR5cGUiOiJzY29wZWRLZXkiLCJzY29wZWRLZXlLZXkiOiIwZjIwNTNkZWE2NzQ4MmU1YjkzMyIsInNjb3BlZEtleVNlY3JldCI6ImJmYWUxZWYwZDZmNDY1MzJkMWExNTcwMjQwNTQxMDllNmNiOTY2NWM0ODFhZjhkNGFjZmUxZWE1ODhiMmU2Y2QiLCJpYXQiOjE3MDM4ODMyMDR9.QxwrJ0KNIuZMjZAVMuuYnyT56DfJzKo8hE7BXi_GiHs


Pinata getway

JWT: kRBuVLHJEp7Ut05PngXRXxSvudx9bu3tZYmXib_3OTQm_6orPb3_FPTi9aIS1ZhU
*/

export const apiKey = '0f2053dea67482e5b933'
export const apiSecret = 'bfae1ef0d6f46532d1a157024054109e6cb9665c481af8d4acfe1ea588b2e6cd'
export const getwayjwt = 'kRBuVLHJEp7Ut05PngXRXxSvudx9bu3tZYmXib_3OTQm_6orPb3_FPTi9aIS1ZhU'
export const ipfsgetway = 'gold-persistent-panther-331'


export const readHader = {
    'Content-Type': 'aplication/json'
}

export const getHeader = {
    headers: {
        pinata_api_key: apiKey,
        pinata_api_secret_key: apiSecret
    }
}

export const sendJsonHeader = {
    headers: {
        'Content-Type': 'aplication/json',
        pinata_api_key: apiKey,
        pinata_api_secret_key: apiSecret
    }
}

