$(document).ready(function() {
    let isPoweredOn = true;
    let volume = 50;

    // Popular channels (Roku-style)
    const channels = [
        {name: "Netflix", icon: "🎥", color: "#E50914"},
        {name: "YouTube", icon: "▶️", color: "#FF0000"},
        {name: "Prime Video", icon: "📦", color: "#146EB4"},
        {name: "Disney+", icon: "🏰", color: "#113CCF"},
        {name: "Hulu", icon: "📺", color: "#1CE783"},
        {name: "Roku Channel", icon: "📡", color: "#6B4EFF"}
    ];

    function renderChannels() {
        const $grid = $('#channelGrid');
        $grid.empty();
        channels.forEach(ch => {
            const $card = $(`
                <div class="col-4 col-md-2">
                    <div class="card text-center p-3 channel-btn" style="background:${ch.color}22; border:2px solid ${ch.color}">
                        <div class="fs-1 mb-2">${ch.icon}</div>
                        <small>${ch.name}</small>
                    </div>
                </div>
            `);
            $card.find('.channel-btn').on('click', () => {
                alert(`Launching ${ch.name} on your TV (simulation)`);
            });
            $grid.append($card);
        });
    }

    // Power button
    $('#powerBtn').on('click', function() {
        isPoweredOn = !isPoweredOn;
        const icon = isPoweredOn ? 'text-success' : 'text-danger';
        $(this).toggleClass('btn-outline-danger btn-outline-secondary');
        alert(isPoweredOn ? "TV Turned ON" : "TV Turned OFF (simulation)");
    });

    // Volume
    $('#volUp').on('click', function() {
        volume = Math.min(100, volume + 10);
        alert(`Volume: ${volume}%`);
    });

    $('#volDown').on('click', function() {
        volume = Math.max(0, volume - 10);
        alert(`Volume: ${volume}%`);
    });

    $('#muteBtn').on('click', () => alert("Muted (simulation)"));

    // D-Pad buttons (example feedback)
    $('.d-pad button').on('click', function() {
        const text = $(this).text() || $(this).find('i').attr('class');
        alert(`Sent command: ${text} to TV (simulation)`);
    });

    // Play/Pause
    $('#playPause').on('click', () => alert("Playback toggled (Play/Pause)"));

    // Keyboard
    $('#keyboardBtn').on('click', function() {
        $('#keyboardModal').modal('show');
        setTimeout(() => $('#tvKeyboardInput').focus(), 500);
    });

    $('#tvKeyboardInput').on('keypress', function(e) {
        if (e.which === 13) {
            alert(`Sent text to TV: "${$(this).val()}"`);
            $('#keyboardModal').modal('hide');
            $(this).val('');
        }
    });

    // File cast simulation
    $('#castFile').on('change', function(e) {
        if (e.target.files.length > 0) {
            alert("Casting file to TV...\n\nFile successfully casted (simulation)");
        }
    });

    // Mirroring
    window.startMirroring = function() {
        alert("Screen Mirroring Started!\n\nYour phone screen is now mirrored to the TV.\n(Realistic simulation - works best on mobile)");
    };

    // Initialize
    renderChannels();

    // Demo connection message
    setTimeout(() => {
        alert("✅ Connected to Living Room Roku TV\n\nAll controls are now active (simulation demo)");
    }, 800);
});
