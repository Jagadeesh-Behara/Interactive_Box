const prices = {
    1: 'DKK 195.00',
    2: 'DKK 345.00',
    3: 'DKK 528.00'
};

const bundles = document.querySelectorAll('.bundle-option');

bundles.forEach(bundle => {
    bundle.addEventListener('click', () => {
        bundles.forEach(b => {
            b.classList.remove('selected');
            const id = b.getAttribute('data-value');
            document.getElementById('options' + id).classList.remove('show');
        });

        bundle.classList.add('selected');
        const value = bundle.getAttribute('data-value');
        document.getElementById('options' + value).classList.add('show');
        document.getElementById('totalPrice').textContent = prices[value];

        const radio = bundle.querySelector('input[type="radio"]');
        if (radio) radio.checked = true;
    });
});