Param([string]$certName, [string]$device)

npm run dist
tizen package -- ./dist -t wgt -s $certName
tizen install -- ./dist -n MpkKrakow.wgt -t $device