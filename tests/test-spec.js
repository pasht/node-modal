/**
 * Created by administrator on 3/20/17.
 */
describe('Node Modal Test Suite',function(){
    let _modal, $element;
    jasmine.getFixtures().fixturesPath = 'my/new/path';
    beforeEach(()=>{
        _modal =  nodemodal.create('<div class="info">Hello World</div>');
        $element = $j('.modal-overlay');
    });

    // First test i run
    it('should versify additon',()=>{
        // Create overlay item
        expect($element).toBeInDOM();
    });

    it('should toggle visibility',()=>{
        expect($element).toBeVisible();
        $element.hide();
        expect($element).not.toBeVisible();
        $element.show();
        expect($element).toBeVisible();
    });

    it('should close when clicked',()=>{
        $element.click();
        expect($element).not.toBeInDOM();

    });

    
});
