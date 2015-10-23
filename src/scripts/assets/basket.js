var basket =
{
    items: [],
    sendToServer: function() {
        var basketInstance = this;

        $.ajax({
            type: "POST",
            url: "/Handler.ashx?action=updatebasket",
            data:
	        {
	            basket: $.toJSON(basketInstance.items)
	        },
            success: function(msg) { }
        });
    },
    addItem: function(item, qty) {
        if (this.items == null)
            this.items = [];
        if (qty < 1)
            return;
        var hasItem = false;
        $(this.items).each(function() {
            if (this.id == item.id) {
                hasItem = true;
                this.qty += Number(qty);
            }
        });


        if (!hasItem) {

	    $('#basket-items').show();

            this.items.push({ id: item.id, qty: Number(qty), item: item });
        }

	
        this.sendToServer();
    },

    removeItem: function(itemId) {
        var counter = 0;
        var splice = 0;

        $(this.items).each(function() {
            if (this.id == itemId) {
                splice = counter;
                return false;
            }
            counter++;
        });


	
        this.items.splice(counter, 1);
        this.sendToServer();
    },
    getItem: function(itemId) {

        var retur = false;
        $(this.items).each(function() {
            if (this.id == itemId) {
                retur = this;
                return false;
            }
        });
        return retur;
    },
    getQuantity: function(itemId) {
        var retur = 0;
        $(this.items).each(function() {
            if (this.id == itemId) {
                retur = this.qty;
                return false;
            }
        });
        return retur;
    },
    updateQuantity: function(itemId, qty) {
        var retur = 0;
        $(this.items).each(function() {
            if (this.id == itemId) {
                this.qty = qty;
                return false;
            }
        });
        this.sendToServer();
    },
    getTotal: function() {
        var retur = 0;
	var testcounter = 0;

        $(this.items).each(function() {
	    testcounter ++;
            retur += Number(this.item.price).toFixed(2) * this.qty;
        });

	if ( testcounter == 0 ) {
		$('#basket-items').hide();
		$('.emptyBasket').show();
	} else {
		$('.emptyBasket').hide();
	}

        return retur;
    }
}