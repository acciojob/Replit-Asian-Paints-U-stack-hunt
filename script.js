//your JS code here. If required.
const changeBtn = document.getElementById('change_button');
const resetBtn = document.getElementById('Reset');
const gridItems = document.querySelectorAll('.grid-item');

function resetGrid() {
    gridItems.forEach(item => {
        item.style.backgroundColor = 'transparent';
    });
}

changeBtn.addEventListener('click', () => {
    const blockId = document.getElementById('block_id').value;
    const color = document.getElementById('colour_id').value;
    const targetBlock = document.getElementById(blockId);

    // First, reset all grids to transparent
    resetGrid();

    // If the ID is valid, apply the new color
    if (targetBlock) {
        targetBlock.style.backgroundColor = color;
    }
});

resetBtn.addEventListener('click', () => {
    resetGrid();
    document.getElementById('block_id').value = '';
    document.getElementById('colour_id').value = '';
});
