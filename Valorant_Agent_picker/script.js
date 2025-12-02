const agents = [
    { name: "Jett", image: "https://imgs.search.brave.com/1gXyGnxKZFw34gf8LMVDP-WEHngkD_TF0SarS4kXSPM/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9kb3Rl/c3BvcnRzLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvMjAyMC8w/My8wNDA5MTgxOS9W/QUxPUkFOVF9KZXR0/X1JlZC0xLTEuanBn/P3c9MTIwMA" },
    { name: "Phoenix", image: "https://imgs.search.brave.com/ZW8lpHphU8l066wWUiSzHPFks1riIyvIT5ojKorZpy4/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9wcm9k/LmFzc2V0cy5lYXJs/eWdhbWVjZG4uY29t/L2ltYWdlcy9WQUxP/UkFOVC1QaG9lbml4/LUxpZ2h0LmpwZz90/cmFuc2Zvcm09YXJ0/aWNsZV93ZWJw" },
    { name: "Sova", image: "https://imgs.search.brave.com/N3iCickS21-pmZfUBQn-SZpADBclkhEmKaCtSIowsV0/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4u/ZXNwb3J0c2RyaXZl/bi5jb20vbWVkaWEv/Z3VpZGVzL2ltYWdl/cy9FVGZVOF9OWFFB/WUpISTUubWFpbi53/ZWJw" },
    { name: "BrimStone", image: "https://imgs.search.brave.com/E2WdbI4D8IWQ3pzT8d2O5ahG1jfcpg0mpmdHO64Ahek/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/ZGV4ZXJ0by5jb20v/Y2RuLWNnaS9pbWFn/ZS93aWR0aD0zODQw/LHF1YWxpdHk9NzUs/Zm9ybWF0PWF1dG8v/aHR0cHM6Ly9lZGl0/b3JzLmRleGVydG8u/Y29tL3dwLWNvbnRl/bnQvdXBsb2Fkcy8y/MDIxLzAxL1ZhbG9y/YW50LUJyaW1zdG9u/ZS5wbmc"},
    { name: "Neon", image: "https://imgs.search.brave.com/DnI3-9LzcCg09nuaxo6GyilyJbC1v_zN2CidSxN2W3o/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/ZGV4ZXJ0by5jb20v/Y2RuLWNnaS9pbWFn/ZS93aWR0aD0zODQw/LHF1YWxpdHk9NzUs/Zm9ybWF0PWF1dG8v/aHR0cHM6Ly9lZGl0/b3JzLmRleGVydG8u/Y29tL3dwLWNvbnRl/bnQvdXBsb2Fkcy8y/MDIyLzAxLzA1L3Zh/bG9yYW50LW5lb24t/cmVsZWFzZS1kYXRl/LWFiaWxpdGllcy1s/b3JlLXNjYWxlZC5q/cGc"},
    { name: "Skye", image: "https://imgs.search.brave.com/nQPypGVb0tkdVtJFLS7I3HvNZVoCbzJkzAi5QWuevs0/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9kb3Rl/c3BvcnRzLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvMjAyMS8w/Ni8yMzA1MjY1OC9T/a3llX0tleUFydF9Q/Ul8yLXNjYWxlZC0x/LTEuanBnP3c9MTIw/MA"},
    { name: "Omen", image: "https://imgs.search.brave.com/k-rcTvcd1linz80GVijkjSynb362dHDv7d-TapS3btI/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9zdHJ5/ZGEuZ2cvX25leHQv/aW1hZ2U_dXJsPWh0/dHBzOi8vd3d3LmRh/dG9jbXMtYXNzZXRz/LmNvbS85MjU4My8x/Njg0MzI3NjY0LW9t/ZW4tdmFsb3JhbnQu/anBlZyZ3PTEyODAm/cT03NQ"},
    { name: "Viper", image: "https://imgs.search.brave.com/5_NvNBZ7p2dsG9BUPfkeeUpASojvhZ71JKNKuo5MKlM/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4u/ZXNwb3J0c2RyaXZl/bi5jb20vbWVkaWEv/Z3VpZGVzL2ltYWdl/cy9WQUxPUkFOVF9W/SVBFUl8yLTEubWFp/bi53ZWJw"},
    { name: "Raze", image: "https://imgs.search.brave.com/zav2-5vpzi-Dsq1juuZ-puNOGzx1nPwcNcdxXKitimI/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93d3cu/ZGV4ZXJ0by5jb20v/Y2RuLWNnaS9pbWFn/ZS93aWR0aD0zODQw/LHF1YWxpdHk9NzUs/Zm9ybWF0PWF1dG8v/aHR0cHM6Ly9lZGl0/b3JzLmRleGVydG8u/Y29tL3dwLWNvbnRl/bnQvdXBsb2Fkcy8y/MDIyLzA1LzI2L1Zh/bG9yYW50LVJhemUu/anBn"},
    { name: "Cypher", image: "https://imgs.search.brave.com/0pQ11sUcsDr19kcK-2ODFPhzDwx0R_UMr-54fV5QBEs/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9kb3Rl/c3BvcnRzLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvMjAyMy8w/My9DeXBoZXItVkFM/T1JBTlQtcmVtb3Zl/ZC10ZW1wb3Jhcmls/eS0xLmpwZWc_dz0x/MjAw"},
    { name: "Sage", image: "https://imgs.search.brave.com/K5AnynEefq6zLq2gLJsGPfI44GuS8f_fNMGm4bcgkwA/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9jZG4u/ZXNwb3J0c2RyaXZl/bi5jb20vbWVkaWEv/Z3VpZGVzL2ltYWdl/cy9WQUxPUkFOVF9T/YWdlX2RhcmsubWFp/bi5qcGc"},
    { name: "Killjoy", image: "https://imgs.search.brave.com/T-xlu5OnkGZ3pf5SWFWBfj3YDguIV0i9fZ6gW50QAaE/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9kb3Rl/c3BvcnRzLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvMjAyMS8w/Ni8yMzA1MjAwMy9L/aWxsSm95X1dhbGxw/YXBlcnNfYmx1ZTIt/c2NhbGVkLTEuanBn/P3c9MTIwMA"},
    { name: "Reyna", image: "https://imgs.search.brave.com/BxmI1C1R_pbV3ELFWS3AIF8VK1xpdx6njTypJYaOfr8/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXZlLmNv/bS93cC93cDY5NTgx/MzYuanBn"},
    { name: "Breach", image: "https://imgs.search.brave.com/xs6mdseoeQz0C4L1z4r8U3ZZktIuajxa-xxwOXoYAhU/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXZlLmNv/bS93cC93cDY0ODk4/OTguanBn"},
    { name: "Yoru", image: "https://imgs.search.brave.com/eRGWz9B2TRTkRmoBh72My3vBx_oho5ZAnvHTpursRkU/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9kb3Rl/c3BvcnRzLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvMjAyMy8w/My9WQUxPUkFOVC1h/Z2VudC1Zb3J1Lmpw/Zz93PTY0MA"},
    { name: "Astra", image: "https://imgs.search.brave.com/Ckl2vGLsFx7LVg8YWXSH3dPPW6esHTZLzhA0_PGAt4I/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4u/Z2Zpbml0eWVzcG9y/dHMuY29tL2ltYWdl/cy9uY2F2dnlrZi9n/ZmluaXR5ZXNwb3J0/cy9jNTY5ZGZjMGRj/NTVlNmNhYzY0NTBi/NGM0MjJmNzk4MDYx/ZTU5NzFiLTE5MjB4/MTA4MC5qcGc_cmVj/dD0wLDM2LDE5MjAs/MTAwOCZ3PTEyMDAm/aD02MzAmYXV0bz1m/b3JtYXQ"},
    { name: "KAY/O", image: "https://imgs.search.brave.com/Kc3vGIVv9tPBtmS7g9L4Z1W8McJMyIgteppjqqa6vCo/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4u/ZXNwb3J0c2RyaXZl/bi5jb20vbWVkaWEv/Z3VpZGVzL2ltYWdl/cy9uMjE5NjQubWFp/bi5qcGc"},
    { name: "Chamber", image: "https://imgs.search.brave.com/ZOmRPCJ6rFN1HZd6uezf5jp9O7DGZRKgIjH1ZVMVqQQ/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9zLnlp/bWcuY29tL3V1L2Fw/aS9yZXMvMS4yL191/cU41aEV2UEExQklV/SF9CTzVnUVEtLX5C/L1ptazlabWxzYkR0/b1BUUTNOanQzUFRn/M05UdGhjSEJwWkQx/NWRHRmphSGx2Ymct/LS9odHRwczovL21l/ZGlhLW1ic3QtcHVi/LXVlMS5zMy5hbWF6/b25hd3MuY29tL2Ny/ZWF0ci11cGxvYWRl/ZC1pbWFnZXMvMjAy/MS0xMC83MTdiZmNh/MC0zOGU1LTExZWMt/YmY3Ni0wMmIyMDUw/YWU3OWQuY2YuanBn"},
    { name: "Fade", image: "https://imgs.search.brave.com/3voAO0r6tjnN6d5UQkjwzKO8ti_tKG2lMI8xqW2EGbw/rs:fit:500:0:0/g:ce/aHR0cHM6Ly90d2lu/ZmluaXRlLm5ldC93/cC1jb250ZW50L3Vw/bG9hZHMvMjAyMi8w/Ni9GUXBJQUpIV1FB/TUtWdE0uanBnP2Zp/dD0xMjAwLDY3NQ"},
    { name: "Harbbor", image: "https://imgs.search.brave.com/b6TSFa8lI_b69sw0-A2RUA0-OaxJZqaLmEmg0lihIXY/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4u/b25lZXNwb3J0cy5n/Zy9jZG4tZGF0YS8y/MDIyLzEwL1ZhbG9y/YW50X0hhcmJvcl9X/YWxscGFwZXItMy0x/MDI0eDU3Ni53ZWJw"},
    { name: "Gekko", image: "https://imgs.search.brave.com/QLVFvBPyuyIxGbnbeMTs9nMgu-dfXxxy-7MikgYqIZ4/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/ZGV4ZXJ0by5jb20v/Y2RuLWNnaS9pbWFn/ZS93aWR0aD0zODQw/LHF1YWxpdHk9NzUs/Zm9ybWF0PWF1dG8v/aHR0cHM6Ly9lZGl0/b3JzLmRleGVydG8u/Y29tL3dwLWNvbnRl/bnQvdXBsb2Fkcy8y/MDIzLzAzLzAzL2dl/a2tvLXZhbG9yYW50/LmpwZw"},
    { name: "Deadlock", image: "https://imgs.search.brave.com/rdG1G9M-JQzBm0yE7HxY7RWnj4-01ny0kTXqHb8oOKg/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/ZGV4ZXJ0by5jb20v/Y2RuLWNnaS9pbWFn/ZS93aWR0aD0zODQw/LHF1YWxpdHk9NzUs/Zm9ybWF0PWF1dG8v/aHR0cHM6Ly9lZGl0/b3JzLmRleGVydG8u/Y29tL3dwLWNvbnRl/bnQvdXBsb2Fkcy8y/MDIzLzA2LzI3L3Zh/bG9yYW50LWRlYWRs/b2NrLWd1aWRlLmpw/Zw"},
];

const agentImage = document.getElementById("agent-image");
const agentName = document.getElementById("agent-name");
const pickButton = document.getElementById("pick-agent");

function getRandomAgent() {
    const randomIndex = Math.floor(Math.random() * agents.length);
    return agents[randomIndex];
}

function displayRandomAgent() {
    const randomAgent = getRandomAgent();
    agentImage.src = randomAgent.image;
    agentName.textContent = randomAgent.name;
}

pickButton.addEventListener("click", displayRandomAgent);


displayRandomAgent();
